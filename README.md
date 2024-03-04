# Mongo DB Todo List

This projects stack is the following.

<table>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel" /></td>
    <td>Vercel</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" /></td>
    <td>Nextjs</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" /></td>
    <td>Typescript</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="TypeScript" /></td>
    <td>Mongodb</td>
  </tr>
  <tr>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/mongoose.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>Mongoose</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="TypeScript" /></td>
    <td>Tailwind</td>
  </tr>
  <tr>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/prettier.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>Prettier</td>
  </tr>
  <tr>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/eslint.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>ESLint</td>
  </tr>
  <tr>
    <td><img src="https://github.com/PhilipRurka/todo-with-mongodb/blob/main/readme-assets/husky.png?raw=true" width="48" height="48" alt="TypeScript" /></td>
    <td>Husky</td>
  </tr>
  <tr>
    <td><img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="TypeScript" /></td>
    <td>Node - v20.11.0</td>
  </tr>
  <!-- Add more rows as needed -->
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

There are a few shell scripts that help automate dumping and resporing of data. To enable the execution of these scripts, run the following.

```shell
chmod +x mongodb/shellScripts/restore/sync_local_to_local.sh && \
chmod +x mongodb/shellScripts/restore/sync_prod_to_local.sh && \
chmod +x mongodb/shellScripts/dump/dump_local.sh && \
chmod +x mongodb/shellScripts/dump/dump_prod.sh
```
