//JSON 

let user = {
    name: 'John',
    id: 123, 
    lastVisit: Date.now(),
    friendsIDs: [123,456,789],
    toJSON: function(){
        return {
            name: this.name,
            lastVisit: this.lastVisit
        }
    }
}

let userData = JSON.stringify(user)
console.log(userData)

console.log(JSON.parse(userData))