import {atom} from 'recoil';
export const statemanager = atom({
    key:'show',
    default:false
})
export const currentData = atom({
    key:'current',
    default:{ 
     itemName:'',
    description:'',
    price:0,
    company:''}

})
export const refreshState = atom({
    key:'refresh',
    default:false
})

