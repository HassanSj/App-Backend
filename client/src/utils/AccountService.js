export const AccountService={
    isAuthenticated:()=>{
        let token=localStorage.getItem('token');
        if(token){
            return true;
        }
        return false;
    }
}