let collect = {
    items: [1,2,3,4],
    *[Symbol.iterator]() {
        for (let item of this.items) {
        	yield item;
        }
    }
};

iter = collect[Symbol.iterator]();

iter.next(); //...