export default class Refrigerator {
    temperature: number // Temp
    capacity: number // Max capacity
    items: string[] // List of things in the fridge

    addItem(item: string): void {
        if (this.items.length < this.capacity) {
            this.items.push(item)
        }
    }

    removeItem(): void {
        if (this.items.length > 0) {
            this.items.shift()
        }
    }

    checkCapacity(): boolean {
        if (this.items.length === this.capacity) {
            return true;
        }
        else {
            return false;
        }
        //return this.items.length === this.capacity
    }
}