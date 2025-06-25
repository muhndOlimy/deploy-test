import { computed, effect } from "@angular/core";
import { patchState , signalStore, watchState, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";

const initialCounterState = 0;

export const CounterStore = signalStore(
    {providedIn:'root'},
    withState<{counter:number , status:string}>({
        counter:initialCounterState,
        status:"untouched"
    }),
    withComputed((state)=>({
        doubleCount:computed(()=> state.counter() * 2),
    })),
    withMethods((state)=>({
        increment:()=> patchState(state , {
            counter: state.counter() + 1
        }),
        decrment:()=> patchState(state , {
            counter: state.counter() - 1
        }),
        reset:()=> patchState(state , {
            counter: 0,
            status:"touched"
        }),
    })),
    withHooks({
        onInit(store){
            console.log("Store Initialized");

            const watcher = watchState(store, (state) => {
                console.log('Counter changed to:', state.counter);
            });

            
            effect(()=>{
                const counter = store.counter();
                console.log("state has been changed from effect")
            })

            return () => watcher.destroy();
        },

        onDestroy(){
            console.log("Store Destroyed");
        }
    })
);