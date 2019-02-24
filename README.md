# Hungry Hungry Hippos

## Related Repos

  - [Component: Overview Photos & Footer](https://github.com/hungry-hungry-hippos/service_TD)
  - [Component: Restaurant Details](https://github.com/hungry-hungry-hippos/service-KC)
  - [Proxy Server](https://github.com/hungry-hungry-hippos/proxy-KC)


## Usage

- To start the server and corresponding database, use `docker-compose up -d`
  - This command will automatically launch the necessary docker containers and seed the database
- To seed the database manually, use `npm run seed-data`
  - Alternatively, you could seed the collections individually:
    - To seed restaurants, run `npm run seed-restaurants`
    - To seed articles, run `npm run seed-articles`
    - To seed reviews, run `npm run seed-reviews`
