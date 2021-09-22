import myStyles from './Contador.module.css';

function Contador() {
    const numero = 5;
    return (
        <div className={myStyles['meu-contador']}>
            Contador: {numero}
        </div>
    )
}

export default Contador;