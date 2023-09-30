// await async
const getUser = fname => {
    var sample = {
        id: 3,
        fname: 'Jane'
    }
    return new Promise((resolve, reject) => {
        console.log('getting user');
        setTimeout(() => {
            if (fname == sample.fname) {
                resolve(sample);
            } else {
                reject('User Not Found');
            }
        }, 2000)
    })
}

const getTweet = id => {
    var sample = {
        id: 3,
        // id: 6,
        post: "Burn baby burn!"
    }
    return new Promise((resolve, reject) => {
        console.log('getting tweet');
        setTimeout(() => {
            if (sample.id == id) {
                resolve(sample);
            } else {
                reject('Tweet Not Found');
            }
        }, 2000)
    })
}

const printTweetTryCatch = async (fname) => {
    try {
        const user = await getUser(fname);
        const tweet = await getTweet(user.id);

        return `${user.fname} tweeted - ${tweet.post}`
    }
    catch(error) {
        console.log(`error: ${error}`);
    }
};

const printTweet = async (fname) => {
    const user = await getUser(fname);
    const tweet = await getTweet(user.id);

    return `${user.fname} tweeted - ${tweet.post}`
};

// printTweet returns a promise! value = a string
// printTweetTryCatch('Jane')
//     .then(value => console.log(value)); // .catch handled by try catch

printTweet('Jane')
    .then(value => console.log(value))
    .catch(error => console.log(`error: ${error}`));
