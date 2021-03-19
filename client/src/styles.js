import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    },
    footer: {
        height: '7rem',
        backgroundColor: '#ffffff',
        marginTop: '2rem',
        padding: '3rem'
    },
    goBackButton: {
        margin: '1.5rem',
        marginRight: '2rem',
        fontWeight: '900'
    },
    searchTerm: {
        margin: '1rem',
        color: '#ffffff';
    }

}));