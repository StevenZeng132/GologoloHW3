"# GologoloHW3" 

Example Queries

Get all logos

{
    logos {
        {"_id":{"$oid":"5e8d0056a5e4063d688cd1de"},"lastUpdate":{"$date":{"$numberLong":"1586299342873"}},"text":"21","color":"#000000","fontSize":{"$numberInt":"21"},"backgroundColor":"#000000","borderColor":"#000000","borderRadius":{"$numberInt":"19"},"borderWidth":{"$numberInt":"21"},"padding":{"$numberInt":"21"},"margin":{"$numberInt":"21"},"__v":{"$numberInt":"0"}}
        {"_id":{"$oid":"5e8d005fa5e4063d688cd1df"},"lastUpdate":{"$date":{"$numberLong":"1586299349556"}},"text":"22","color":"#000000","fontSize":{"$numberInt":"22"},"backgroundColor":"#000000","borderColor":"#000000","borderRadius":{"$numberInt":"27"},"borderWidth":{"$numberInt":"22"},"padding":{"$numberInt":"22"},"margin":{"$numberInt":"22"},"__v":{"$numberInt":"0"}}
        {"_id":{"$oid":"5e8d01dfdefa5e0b1481a24b"},"lastUpdate":{"$date":{"$numberLong":"1586737871178"}},"text":"test","color":"#000000","fontSize":{"$numberInt":"20"},"backgroundColor":"#00ffff","borderColor":"#008080","borderRadius":{"$numberInt":"21"},"borderWidth":{"$numberInt":"21"},"padding":{"$numberInt":"22"},"margin":{"$numberInt":"12"},"__v":{"$numberInt":"0"}}
    }
}

Get a logo

{
    logo("_id":{"$oid":"5e8d0056a5e4063d688cd1de") {
        {"_id":{"$oid":"5e8d0056a5e4063d688cd1de"},"lastUpdate":{"$date":{"$numberLong":"1586299342873"}},"text":"21","color":"#000000","fontSize":{"$numberInt":"21"},"backgroundColor":"#000000","borderColor":"#000000","borderRadius":{"$numberInt":"19"},"borderWidth":{"$numberInt":"21"},"padding":{"$numberInt":"21"},"margin":{"$numberInt":"21"},"__v":{"$numberInt":"0"}}
    }
}


Add a logo

mutation {
    addLogo (
        test: "CSE316",
        color: "#ff33dd",
        fontSize: "$numberInt":"21",
        backgroundColor: "#ff33dd",
        borderColor: "#ff33dd",
        borderRadius: "$numberInt":"21",
        borderWidth: "$numberInt":"21",
        padding: "$numberInt":"21",
        margin: "$numberInt":"21",
        
    )
}

Updata a logo

mutation {
    updateLogo(
        {"_id":{"$oid":"5e8d0056a5e4063d688cd1de"},"lastUpdate":{"$date":{"$numberLong":"1586299342873"}},"text":"21","color":"#000000","fontSize":{"$numberInt":"21"},"backgroundColor":"#000000","borderColor":"#000000","borderRadius":{"$numberInt":"20"},"borderWidth":{"$numberInt":"21"},"padding":{"$numberInt":"21"},"margin":{"$numberInt":"21"},"__v":{"$numberInt":"0"}}
    )
}

Remove a logo 

mutation {
    removeLogo(id: "5e8d0056a5e4063d688cd1de")
}