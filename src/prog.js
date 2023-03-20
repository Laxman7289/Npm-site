const setData=(data1,data2,data3)=>{
    data3(data1+data2)
}
setData("Fname","Lname",()=>{console.log("data")})