export class Init{
    load(){
        if(localStorage.getItem('todos')=== null|| localStorage.getItem('todos') == undefined){
            console.log('No todos found...Creating...');
            var todos=[
                {
                    text : 'pick',
                    isDone: false
                },
                {
                    text : 'meet',
                    isDone: false
                },
                {
                    text : 'dinner',
                    isDone: false
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }else{
            console.log('Found Todos...')
        }
            
    }
}