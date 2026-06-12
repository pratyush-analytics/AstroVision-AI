# ── AstroVision AI — Dockerfile ───────────────────────────────
# Serves the static site using nginx
# Build: docker build -t astrovision-ai .
# Run:   docker run -p 8080:80 astrovision-ai
# Access: http://localhost:8080

FROM nginx:alpine

LABEL maintainer="AstroVision AI <support@astrovision-ai.com>"
LABEL description="AstroVision AI — AI-Powered Astrology Platform"
LABEL version="1.0.0"

# Copy all project files to nginx web root
COPY . /usr/share/nginx/html

# Copy custom nginx configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
