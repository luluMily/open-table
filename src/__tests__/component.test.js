import React from "react";
import { create } from "react-test-renderer";
import SearchBar from "../components/SearchBar";

beforeEach(function () {
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                Id: '123',
                json: function () {
                    return {
                        restaurants: [
                            {
                                id: 21307,
                                name: "Scaramouche Restaurant",
                                address: "1 Benvenuto Place",
                                city: "Toronto",
                                state: "ON",
                                area: "Toronto / SW Ontario",
                                postal_code: "M4V 2L1",
                                country: "CA",
                                price: 4,
                            },
                            {
                                id: 82957,
                                name: "The Sultan's Tent",
                                address: "49 Front St E",
                                city: "Toronto",
                                state: "ON",
                                area: "Toronto / SW Ontario",
                                postal_code: "M5E 1B3",
                            }
                        ]
                    }
                }
            });
        });

        return p;
    });
})

it("shows a list of restaurants", async () => {
    const component = create(<SearchBar />);
    const instance = component.getInstance();
    await instance.onFormSubmit();
    console.log(instance.state) // << HERE IS THE SNITCH!
});
