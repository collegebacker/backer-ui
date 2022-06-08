# Backer UI

Backer UI is using [RollupJS](https://rollupjs.org/guide/en/) to build the bundle and [React Storybook](https://storybook.js.org/) to preview the components.

We also use [Chromatic] to test the components and preview them in the browser with [Storybook](https://storybook.js.org/)

### Backer UI Storybook

Storybook — https://main--629496e95fff28004a61a2a4.chromatic.com

Chromatic app — https://www.chromatic.com/builds?appId=629496e95fff28004a61a2a4

Ask for permission to use the storybook UI to preview the components. If you're memmber of the Backer team you should have permission automatically.

---

# 🛠 How to use

## Installation

Add the line below to your `package.json` `dependencies` file. You can use the [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) package manager. Do not forget to add the actual version of the library as a tag. View all tags [here](https://github.com/collegebacker/backer-ui/tags).

```json
"@collegebacker/backer-ui": "git://github.com/collegebacker/backer-ui.git#tag-version"
```

## Usage

After installing the library, you can use it by importing it in your application.

import global styles:
```scss
"@collegebacker/backer-ui/styles/all.scss";
```

import the components:
```tsx
import { Button } from "@collegebacker/backer-ui/ui";
```

---

# Development process

## Run the project locally:

1. copy repo to your local machine
2. run `yarn` to install dependencies
3. run `yarn storybook` to view the UI or if you want to develop the components.

---

## Deploy pipeline

1. Create new branch.
2. Make changes.
3. Change the version number in `package.json`. Use [semantic versioning.](https://semver.org/).

---

1. Run `npx chromatic --auto-accept-changes --project-token=0000` to deploy Storybook to [Chromatic](https://www.chromatic.com/) server. If you are part of the Backer team on Github you should have access to the Chromatic automatically.
2. Create a MR and describe the changes.
3. Notify the team about the MR and designers about the new stories build.

---

7. Wait for code review. If approved, go next.
8. Run `yarn rollup` to build the bundle.
9. Commit and push.
10. Merge the PR
11. Delete merged branch.

---

12. Checkout the `main` branch.
13. Run `npx chromatic --auto-accept-changes --project-token=0000` again to deploy Storybook to the `main` branch on Chromatic.

---

14. Create tag.
15. Gongratulations! You have successfully released a new version of the project. 🎉