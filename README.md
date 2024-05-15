# Deploying your changes & Raising pull request

1. Pull the latest repo (git pull)
2. Creating your branch -> Go to Source Control on left nav bar -> Click on 3 dots on top -> Branch -> Create Branch 
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/8052d914-4718-4c1c-a6fd-83ff1f0972e3)
3. name your branch naming convection - (yourname_task) -> Enter
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/ce256ff6-55e8-40cf-90ef-4c2949683802)
      alternately use git command (git checkout -b ＜new-branch＞)
4. Make your changes, the changes you make appear can be seen using the source control tab.
   Before commiting changes make sure app is running properly.
   Check all the unit test are passing once we start adding unit test. (pnpm run test)
5. Write a relvent commit message & click on commit -> confirm to push the changes -> publish branch
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/822dac11-e4cd-4b1f-86cb-296c3cd9b31b)
   alternately use git commands :-
      git add -A to add all files new files, changes and removed files.
      git commit -m "Your message" to save the changes done in the files.
      git push -u origin master to send your committed changes to a remote repository, where the local branch is named master to the remote named origin         
   ![image](https://github.com/longpdev/cs476.project/assets/56104171/ce54af46-db54-48aa-a80c-f03c030a2c18)
   v) One of the team member will approve the changes and after appoval click on merge the changes.
