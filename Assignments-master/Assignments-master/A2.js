 var player = [0,0];


      var board = 0;

      while(board < 25)
      {

        for(var i=0; i<2; i++)
        {

          var die = (Math.floor(Math.random() * 6) + 1);


          document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
          document.write("Player " + (i+1) + "  rolls... Die: " + die + ", ");


          player[i] = player[i] + die;


            if(player[i]==15)
              {
                player[i] = 5;
                  document.write("You stumble on a snake, go back to position 5" + "<br>");
              }


            else if(player[i]==23)
              {
                player[i] = 16;
                  document.write("You stumble on a snake, go back to position 16" + "<br>");
              }


            else if(player[i]==8)
              {
                player[i] = 15;
                  document.write("You stumble on a ladder, advance to position 15" + "<br>");
              }


            else if(player[i]==19)
              {
                player[i] = 24;
                  document.write("You stumble on a ladder, advance to position 24" + "<br>");
              }


            else {
              document.write("Move to position " + player[i] + "<br>");
            }


          if(player[i] > 24)
              {
                  document.write("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
                  document.write("Player " + (i+1) + " passes the finishing square. Player " + (i+1) + " wins!!!" + "<br>");
                  break;
              }
        }


        document.write("<br>");


        if (player[0] > player[1])
        {
          board = player[0];
        }
        else {
          board = player[1]
        }

      }

        document.write("Game ends..." + "<br>");
