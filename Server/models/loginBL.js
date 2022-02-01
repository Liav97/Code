const user = require("../models/userModel");

const getAll = function()
{
    return new Promise((resolve, reject) =>
    {
        user.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

const getUser = function(id)
{
    return new Promise((resolve, reject) =>
    {
        user.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

module.exports = {getAll, getUser}