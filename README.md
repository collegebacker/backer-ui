# Backer UI

Backer UI is using [RollupJS](https://rollupjs.org/guide/en/) to build the bundle and [React Storybook](https://storybook.js.org/) to preview the components.

We also use [Chromatic] to test the components and preview them in the browser with [Storybook](https://storybook.js.org/)

### Run locally

1. copy repo to your local machine
2. run `yarn`
3. run `yarn storybook` to view the UI or `yarn rollup` to build the bundle.

### Backer UI on Chromatic

Storybook — https://main--629496e95fff28004a61a2a4.chromatic.com
To view the link above, manage stories, and test the user interface, you need an invitation.

---

# Build process

1. Create new branch.
2. Make changes.
3. Create a PR and describe the changes.

4. Wait for code review. If approved, go next.
5. Chnage the version number in package.json.
6. Run `yarn rollup`.
7. Commit and push.

8. Create new tag.
9. Run `yarn chromatic`.
