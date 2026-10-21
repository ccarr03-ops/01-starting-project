export default function TabButton(children, onSelect){
   // function handleClick(){
   //     console.log('Hello World');
   // }

    return(
        <li>
            <button onCLick = {onSelect} >
                {children}
            </button>
        </li>
    );
}