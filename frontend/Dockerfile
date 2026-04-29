# Step 1: Use Nginx Alpine for a tiny footprint (~5MB)
FROM nginx:alpine

# Step 2: Metadata
LABEL maintainer="Simar"
LABEL description="Frontend for Tech Inventory 3-Tier App"

# Step 3: Clean default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Step 4: Copy ALL frontend files (html, css, etc.) into the container
# This will copy both index.html and style.css automatically
COPY . /usr/share/nginx/html/

# Step 5: Expose Port 80
EXPOSE 80
