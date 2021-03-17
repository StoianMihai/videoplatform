import React, { useState } from 'react'
import { IconButton, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.25),
        },
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(2),
            width: '92%',
            right: '12px'
        },
        margin: '20px'

    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        color: theme.palette.primary.main,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));


const SearchBox = ({ history }) => {
    const classes = useStyles();

    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    // function findUserInfo(userName, searchString) {
    //     return userName.toLowerCase().substr(0, searchString.length).includes(searchString.toLowerCase());
    // }
    // let searchResult = users.filter(i => findUserInfo(i.userName, '<search_string>'))

    //    const mapedArr = arr.map(el => el.title)\
    //    ['title1', 'title2']
    //    mapedArr.find()



    return (
        <>
            <div className={classes.search}>
                <form onSubmit={submitHandler}>
                    <div className={classes.searchIcon}>
                        <IconButton type='submit'>
                            <SearchIcon color='primary' />
                        </IconButton>
                    </div>
                    <InputBase
                        inputComponent='input'
                        placeholder="Search videos ..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </form>
            </div>
        </>
    )
}

export default SearchBox
