export interface regionData {
    name : string,
    iconKey : string
    peopleNumber : number,
}

interface regionDatas {
    nataxtari : regionData
}

export const regionDatas : regionDatas = {
    nataxtari : {
        name : "nataxtari",
        iconKey : "smallVillage",
        peopleNumber : 20,
    }
}