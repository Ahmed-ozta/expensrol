function Profil() {
    const style = {
        display: 'flex',
    };
    const styleP = {
        position: 'relative',
        top: '14px',
    };
    const imgStyle = {
        width: '42px',
        marginRight: ' 10px',
    };
    return (
        <div style={style}>
            <img src="Expensrol_image\abstract-user-flat-4 4.svg" style={imgStyle} /><p style={styleP}>Username</p>
        </div>
    )
}
export default Profil