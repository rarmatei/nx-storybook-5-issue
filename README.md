Steps to reproduce:

```bash
yarn nx g @nrwl/angular:lib test3
yarn nx g @nrwl/angular:component main --project=test3
yarn nx g @nrwl/angular:storybook-configuration test3
```

No `.storybook` folder is generated in `test3`. This will break the `storybook` builder for that lib.
If you change the Storybook version to v6 it will work.
