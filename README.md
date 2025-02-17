# Mongo DB Todo List

This projects stack is the following.

<table>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" /></td>
    <td>Vercel</td>
    <td><img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" /></td>
    <td>Nextjs</td>
    <td><img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" /></td>
    <td>Typescript</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="Mongodb" /></td>
    <td>Mongodb</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/mongoose.png?raw=true" width="48" height="48" alt="Mongoose" /></td>
    <td>Mongoose</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/migrate-mongo.png?raw=true" width="48" height="48" alt="Migrate Mongo" /></td>
    <td>Migrate Mongo</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" /></td>
    <td>Tailwind</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/swr.png?raw=true" width="48" height="48" alt="SWR" /></td>
    <td>SWR</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/next-auth.png?raw=true" width="48" height="48" alt="NextAuth" /></td>
    <td>NextAuth</td>
  </tr>
  <tr>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/prettier.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>Prettier</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/eslint.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>ESLint</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/husky.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>Husky</td>
  </tr>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/react-hook-form.png?raw=true" width="48" height="48" alt="React Hood Form" /></td>
    <td>React Hood Form</td>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/zod.png?raw=true" width="48" height="48" alt="Zod" /></td>
    <td>Zod</td>
  <tr>

  </tr>
</table>

<br/>

## Post Clone

After cloning this project and running yarn, it is important to follow these steps

<br/>

### Husky configuration

We are utilizing Husky to execute eslint on `pre-commit` and eslint & build on `pre-push`.

#### Clone and move husky

Some Git Gui applications require these files to also be located in `.git`. This said run this.

```shell
husky install && \
rm -rf .git/hooks && \
ln -s ../.husky .git/hooks
```

> There is a chance that you must create `.git/hooks`. You will know by the output of the command above.

#### Enable execution

We need to enable the execution of these two shell scripts. EEnter this in your terminal at the root of this project.

```shell
chmod +x .husky/pre-commit .husky/pre-push && \
chmod +x .git/hooks/pre-commit .git/hooks/pre-push && \
husky install
```

### Mongodb

#### Chmod

There are a few shell scripts that help automate dumping db, restoring db and white listing relating goods. To enable the execution of these scripts, run the following.

```shell
chmod +x mongodb/scripts/dump/dump_local.sh && \
chmod +x mongodb/scripts/dump/dump_prod.sh && \
chmod +x mongodb/scripts/restore/sync_local_to_local.sh && \
chmod +x mongodb/scripts/restore/sync_prod_to_local.sh && \
chmod +x mongodb/scripts/restore/sync_prod_to_prod.sh && \
chmod +x mongodb/scripts/whitelist/deleteWhitelistEntries.sh && \
chmod +x mongodb/scripts/whitelist/updateWhiteListing.sh
```

#### migrate-mongo

migrate-mongo is a library used to help automate mongodb migrations. You will need to install it globally via

```shell
npm i -g migrate-mongo
```

## Handling Migrations

The following commands can be utilised.

- `migrate-mongo up`: Run the migrations scripts in sequential order.
- `migrate-mongo status`: Display the status of each migration.
