function getuserdetails(id,getusersubjects){
    console.log("get user deatils by userId",id);
    getusersubjects({userroll:"4923"})

};
function getusersubjects(userroll,getusermarks){
    console.log("getuser subjects by roll number ",userroll);
    getusermarks({subid:"english-1"})

}
function getusermarks(usersubid){
console.log("get user marks by subid",usersubid);
}
getuserdetails("4923",function(userroll){
getusersubjects(userroll,function(usersubid){
getusermarks(usersubid)
})
});

