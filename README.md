# Running the UI Project

1. **Pull the Latest Repo**
   - Use the command: `git pull`

2. **Create Your Branch**
   - Navigate to the Source Control on the left navigation bar.
   - Click on the three dots at the top.
   - Select Branch -> Create Branch.
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/8052d914-4718-4c1c-a6fd-83ff1f0972e3)

3. **Name Your Branch**
   - Follow the naming convention: `(yourname_task)`, then press Enter.
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/ce256ff6-55e8-40cf-90ef-4c2949683802)
   - Alternatively, use the git command: `git checkout -b <new-branch>`

4. **Make Your Changes**
   - Your changes will appear in the Source Control tab.
   - Ensure the app is running properly before committing any changes.
   - Run all unit tests to ensure they pass: `pnpm run test`

5. **Commit and Push Changes**
   - Write a relevant commit message, then click on Commit and Confirm to push the changes.
   - Publish the branch.
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/822dac11-e4cd-4b1f-86cb-296c3cd9b31b)
   - Alternatively, use the following git commands:
     - `git add .` to stage all changes (including new and removed files).
     - `git commit -m "Your message"` to commit the changes.
     - `git push -u origin <branch-name>` to push the committed changes to the remote repository.
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/ce54af46-db54-48aa-a80c-f03c030a2c18)

6. **Approval and Merge**
   - One of the team members will review and approve the changes.
   - After approval, merge the changes.
  
That's all for now
