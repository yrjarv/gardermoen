var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function mainLoad() {
    for (let i = 0; i < 100; i++) {
        $("body").append("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!");
    }
    function fetchFlightData() {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://flydata.avinor.no/XmlFeed.asp?TimeTo=8&airport=OSL&direction=D';
            const response = yield fetch(url);
            const xmlText = yield response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const flights = [];
            const flightNodes = xmlDoc.getElementsByTagName('flight');
            for (let i = 0; i < flightNodes.length; i++) {
                const flightNode = flightNodes[i];
                const flight = {
                    flightId: (_a = flightNode.getAttribute('id')) !== null && _a !== void 0 ? _a : '',
                    airline: (_b = flightNode.getAttribute('airline')) !== null && _b !== void 0 ? _b : '',
                    airport: (_c = flightNode.getAttribute('airport')) !== null && _c !== void 0 ? _c : '',
                    scheduledTime: new Date((_d = flightNode.getAttribute('schedule_time')) !== null && _d !== void 0 ? _d : ''),
                    estimatedTime: new Date((_e = flightNode.getAttribute('time')) !== null && _e !== void 0 ? _e : ''),
                    status: (_f = flightNode.getAttribute('status')) !== null && _f !== void 0 ? _f : '',
                };
                flights.push(flight);
            }
            return flights;
        });
    }
    console.log(fetchFlightData());
}
