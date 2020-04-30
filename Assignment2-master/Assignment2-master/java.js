var player = [0,0];


     var square = 0;

     while(square < 25)
     {

       for(var i=0; i<2; i++)
       {
         document.write("<br>");
         var rolldie = (Math.floor(Math.random() * 6) + 1);

         document.write("Player " + (i+1) + "  rolls the Die: " + rolldie + ", ");

         player[i] = player[i] + rolldie;

           if(player[i]==15)
             {
               player[i] = 5;
                 document.write("Oh no! you are on the snake, returning to position 5" + "<br>");
             }

           else if(player[i]==23)
             {
               player[i] = 16;
                 document.write("Oh no! you are on the snake, returning to position 16" + "<br>");
             }

           else if(player[i]==8)
             {
               player[i] = 15;
                 document.write("You found a ladder, jumping to position 15" + "<br>");
             }

           else if(player[i]==19)
             {
               player[i] = 24;
                 document.write("You found a ladder, jumping to position 24" + "<br>");
             }

           else {
             document.write("Moving to position " + player[i] + "<br>");
           }

         if(player[i] > 24)
             {

                 document.write("<br> Player " + (i+1) + " wins the game." + "<br>");
                 break;
             }
       }

       document.write("<br>");

       if (player[0] > player[1])
       {
         square = player[0];
       }
       else {
         square = player[1]
       }

     }
