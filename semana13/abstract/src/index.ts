import { Manager } from "./Manager";
import { ResidentialClient } from "./ResidentialClient"
import { CommercialClient } from "./CommercialClient"
import { IndustrialClient } from "./IndustrialClient"

const clientManager = new Manager();

// const residentialClient = new ResidentialClient("Manoel Neto", 1, 50, "029.321.831-50", 4, "75920-000")
// clientManager.registerClient(residentialClient)

// const commercialClient = new CommercialClient("Flamboyant ", 2, 70, "0000.0000.0000/0001", 4, "75920-000") // passar parêmetros
// clientManager.registerClient(commercialClient)

// const industrialClient = new IndustrialClient("FrigoFortt", 3, 100, "12345", 30, "75920-000")// passar parêmetros
// clientManager.registerClient(industrialClient)

const hello = clientManager.calculateClientBill(3)
console.log(hello)