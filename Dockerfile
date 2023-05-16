FROM node

RUN npm run prestart
CMD ["npm", "run", "start"]