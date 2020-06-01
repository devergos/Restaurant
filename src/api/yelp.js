import axios from 'axios';


export default axios.create({
    baseURL: ' https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PaJkH2g0rKAajRYiItxK6eYMa7v5-o1OUG0Tj7Lj3xs9R93CDOp1Wg7w0o4GN3iq4r87xlSL6PPQBfNjN4jsUZnoRWh_SGJjQF9PO8OWRMOjAT_bfg-2ikBMBnfOXnYx'
    }
});
