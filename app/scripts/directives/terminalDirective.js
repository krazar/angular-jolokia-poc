/**
 * Created by pierremarot on 30/10/2013.
 */

var claudiaApp = angular.module('claudiaApp');


claudiaApp.directive('terminal',function(JmxCommands){
    return {
        scope:{
            call:'&'
        },
        link: function(scope,elem,attrs){
            var param;

            elem.terminal(function(c, term){
               var regex = c.match(/ *([aA-zZ]+)( +[aA-zZ]+)*/);
               if(regex){
                   var command = JmxCommands[regex[1]];
                   if(command){

                       if(regex[2]){
                           regex[2] = regex[2].substr(1);
                           if(command.params.indexOf(regex[2]) == -1 ){
                           var str = 'Usage: '+ regex[1];
                           if(command.params.length){
                               str += ' [';
                               for (var i=0;i<command.params.length;i++)
                               {
                                   str += command.params[i] + '|';
                               }
                               str += ']';
                           }

                           term.error('Bad Usage ! ');
                           term.error(str);
                           return;
                         }
                         param = regex[2];
                       }
                       var result = scope.call({
                           name:command.name,
                           attribute:command.attribute,
                           path:param
                       });
                       if(typeof result === 'object'){
                           var output = '';
                           for (property in result) {
                               output += property + ': ' + result[property]+ '\n';
                           }
                           term.echo(output);
                       }
                       else{
                           term.echo(result);
                       }
                       return;
                   }else{
                       if(regex[1] == "help" && !regex[2]){
                           var output = 'Available commands :';
                           for (object in JmxCommands){
                                  output +=' '+object;
                           }
                           term.echo(output);
                           return;
                       }
                   }
               }
                   term.error('Error : Your command does not exist.');
            },{
                greetings:'Welcome in the Claudia Interpreter',
                name: 'claudia-task',
                height: 400,
                prompt: 'claudia>'
            });
        }
    }
})
