import myStyles from './Contador.module.css';

function Contador(props) {
    const numero = 5;
    return (
        <div className={myStyles['meu-contador']}>
            Contador: {numero} - {props.a}
            <div>
                espaço
            </div>
            {props.children}
        </div>
    )
}

export default Contador;