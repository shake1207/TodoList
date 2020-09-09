angular.module('myApp')
            
            .controller('TodoListController',function($scope,$rootScope){
           
              $scope.todoText = '';

              $scope.todos = [];  
              $scope.selectAll = false;
              $scope.addTodo = function(){
                if($scope.todoText===''){
                  return;
                }
                this.todos.unshift(
                  { 
                    key:new Date().getTime(),                     
                    text:$scope.todoText,
                    done:false,
                    state:false,
                    chang:true,
                    size:0,
                    time:new Date().toLocaleString()
                    
                  }
                )  
              
                this.todoText = '';
              }  
              $scope.setStyle = function(){
                if($scope.todos.size ==3) return 'fontLg';
                else if($scope.todos.size==2) return 'fontMl';
                else return 'fontSm';
                
              }

              $scope.sm = function(){
                $scope.todos.size = 1;   
              }
              $scope.ml = function(){
                $scope.todos.size = 2;
              }
              $scope.lg = function(){
                $scope.todos.size = 3;
              }
                 
              $scope.consummation = function(key){
                for(var i=0;i<$scope.todos.length;i++){
                  if($scope.todos[i].key === key){
                     $scope.todos[i].state =true ;
                     $scope.todos[i].time = new Date().toLocaleString();
                    
                     console.log($scope.todos)
                  }     
                }
              }
           
              $scope.edit = function(todo){
                todo.editing = true;
              } 
              $scope.save = function(todo){
                todo.editing = false;
              }

            
              $scope.remaining = function () {
                  var count = 0;
                  

                  count = $scope.todos.filter(function(todo){
                    return todo.state === false && todo.chang === true;
                  }).length;

                  return count;
                }
               
              $scope.completed = function(){
                var count = 0;
                count = $scope.todos.filter(function(todo){
                  return todo.state === true && todo.chang=== true;
                          
                }).length;

                return count;
              }


              $scope.delete = function(key){  

                let targetIndex=0;
                
                for(let i=0; i< $scope.todos.length; i++){

                  if($scope.todos[i].key === key){
                      targetIndex = i;
                      $scope.todos.splice(targetIndex,1);
                      $scope.todoText= '';
                  }
                }   
              } 

              $scope.delChang = function(key){

                for(var i=0;i<$scope.todos.length;i++){

                  if($scope.todos[i].key === key){
                      
                     $scope.todos[i].chang = false ;   
                  }
                }
              }





              $scope.all = function(){

                  $scope.todos.forEach(function (todo) {
                    
                     todo.done = $scope.selectAll;
                    })
                   
                  
                
              }

               $scope.archive = function(){
                angular.forEach($scope.todos,function(todo){

                  if(todo.done==true && todo.state==false){
                    todo.chang = false;
                    console.log(todo.done )
                  }
                });

                $scope.selectAll = false;
                console.log($scope.selectAll)
                };  

        
                


              }); 
           