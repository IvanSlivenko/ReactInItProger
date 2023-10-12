ReactDOM.render(
    React.createElement('input', {
        placeholder: 'Help text',
        onClick: ()=> console.log('Cliked'),
        onMouseEnter: () => console.log('Mouse Over'),
        
    })
    ,

  document.getElementById("app")
);