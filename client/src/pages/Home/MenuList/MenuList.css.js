export default {
    container: {
        padding: '0rem 2rem', 
        borderRight: '1px solid lightgrey', 
    },
    header: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
    },
    title: {
        gridRow: '1/2',
        fontSize: '20px',
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    tag: {
        gridRow: '2/3',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    }
}