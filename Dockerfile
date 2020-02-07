FROM nginx:alpine

RUN mkdir usr/share/nginx/html/hellospace
COPY /dist/ usr/share/nginx/html/hellospace
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

######

# FROM nginx:alpine
# FROM node:12.10.0-slim
# # Add nginx and nodejs
# #RUN apk install --update nginx nodejs

# RUN mkdir -p /tmp/nginx/application

# # Copy the respective nginx configuration files
# COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
# COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

# # Copy source files to temp directory
# WORKDIR /tmp/nginx/application
# COPY . .
# # Install NPM dependencies
# RUN npm install

# # Build application
# RUN npm run build

# # Create application directory
# RUN cd /usr/share/
# RUN mkdir nginx
# RUN cd nginx/
# RUN mkdir html
# RUN cd html
# RUN mkdir hellospace
# # RUN mkdir /usr/share/nginx/html
# # RUN mkdir /usr/share/nginx/html/hellospace

# # Copy built files
# COPY /dist/ /usr/share/nginx/html/hellospace
# RUN ls -li /usr/share/nginx/html/hellospace

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

######