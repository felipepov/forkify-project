import { deleteRender }  from '../views/listView.js'

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        //If an item with same name exists already
        const same = this.items.find(el => el.ingredient === ingredient);
        let item;
        if (same){
            let newUnit;
            if (same.unit === unit) {newUnit = same.unit} else {newUnit = ''}
            item = {
                id: new Date().getUTCMilliseconds(),
                count: count + same.count,
                unit: newUnit,
                ingredient
            }
            this.deleteItem(same.id);
            deleteRender(same.id);
             //If an item with same does not exists already
        } else {
            item = {
                id: new Date().getUTCMilliseconds(),
                count,
                unit,
                ingredient
            }
        }
        this.items.push(item);
        // Perist data in localStorage
        this.persistData();
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // [2,4,8] splice(1, 2) -> returns [4, 8], original array is [2]
        // [2,4,8] slice(1, 2) -> returns 4, original array is [2,4,8]
        this.items.splice(index, 1);

        // Perist data in localStorage
        this.persistData();
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }

    deleteAll(){
        this.items = [];

        // Perist data in localStorage
        this.persistData();
    }

    persistData() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('items'));
        
        // Restoring list from the localStorage
        if (storage) this.items = storage;
    }
}