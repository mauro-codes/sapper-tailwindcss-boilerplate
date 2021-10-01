
<script>
	import BottomSheet from "../components/BottomSheet.svelte";
	import { fly } from 'svelte/transition';
	let open = false;
	let visible = true;
	let status = 'waiting...';
  import Header from "../components/Header.svelte";
  import Coin from "../../static/coin.svelte";

</script>
<div class="flex justify-center"><button on:click={() => open = true} class="p-4 bg-primary-orange text-white text-center text-xl my-20 mx-auto max-w-64 w-64 rounded-lg">
	Bottom sheet {open ? 'opened' : 'closed'}
  </button>
</div>
  <BottomSheet class="w-full px-4" bind:open>
	<div style={`background-image:url(${"confetti.png"})`} class="pt-20 white-sheet w-full bg-white rounded-lg bg-contain bg-no-repeat realtive">
		<div style={`background-image:url(${"coin.png"})`} class="coin-place  bg-contain bg-no-repeat">
			<p class="text-xl leading-6 text-coin-brown font-extrabold text-center">5283</p>
			<p class="text-xs leading-4 font-medium text-center">COINS</p>
		</div>
		<p class="great-para text-center pt-16 font-medium text-xl leading-6">Great order! You’re all Green!</p>
		<div class="flex px-16 justify-between items-center w-full mt-2 pb-60">
			<div class="green text-lg leading-6 px-2 py-1 bg-green-400 rounded text-white">Green</div>
			<div class="green text-lg leading-6 px-2 py-1 bg-green-400 rounded text-white">Green</div>
			<div class="green text-lg leading-6 px-2 py-1 bg-green-400 rounded text-white">Green</div>
		</div>
		
			{#if visible}
			<div 
			transition:fly="{{ y: 200, duration: 2000 }}"
			on:introstart="{() => status = 'intro started'}"
			on:outrostart="{() => status = 'outro started'}"
			on:introend="{() => status = 'intro ended'}"
			on:outroend="{() => status = 'outro ended'}"
			 class="coin-summary absolute w-full right-16px opacity-0">
				<p class="mb-4 text-sm font-semibold leading-6 px-4">Coin Summary</p>
				<div class="px-4 flex justify-between items-center border-b-2">
					<p class="py-2">Tied up sales</p>
					<div class="flex items-center">3456 <span class="ml-2"><Coin/></span></div>
				</div>
				<div class="px-4 flex justify-between items-center border-b-2">
					<p class="py-2">Non tied up sales</p>
					<div class="flex items-center">1253 <span class="ml-2"><Coin/></span></div>
				</div>
				<div class="px-4 flex justify-between items-center">
					<p class="py-2">8 AM Incentive</p>
					<div class="flex items-center">100 <span class="ml-2"><Coin/></span></div>
				</div>
				<div class="px-4 flex justify-between items-center bg-secondary-bg-orange rounded-b-lg">
					<p class="py-3 font-medium">Total Coins</p>
					<div class="text-primary-orange font-medium flex items-center">5283 <span class="ml-2"><Coin/></span></div>
				</div>
			</div>
			{/if}
	</div>
	<div class="green-button py-2 w-full bg-button-green mt-2 rounded text-center text-white mb-6">
		Go Back to Beat
	</div>
	<div class="relative today-coins bg-primary-orange py-3 rounded-t-lg">
		<div class="flex">
			<p class="leadin-6 flex items-center text-base px-3 text-white font-bold"> <span class="mr-2"><Coin/></span> Today’s coins</p>
		</div>
		<ul class="absolute w-p176 p-1 coin-loader flex justify-around rounded-lg -top-3 right-3">
			<li class="py-2 px-2 bg-white rounded font-medium">2</li>
			<li class="py-2 px-2 bg-white rounded font-medium">7</li>
			<li class="py-2 px-2 bg-white rounded font-medium">0</li>
			<li class="py-2 px-2 bg-white rounded font-medium">0</li>
			<li class="py-2 px-2 bg-white rounded font-medium">0</li>
			<li class="py-2 px-2 bg-white rounded font-medium">0</li>
		</ul>
	</div>
  </BottomSheet>
  
  <style>
	  .green{
		background: linear-gradient(106.64deg, #1BAF0F 0%, #65CD76 34.26%, #2BCF59 70.31%, #36A900 102.49%);
	  }
	  .coin-place{
		  background-size: 132px;
		  background-position: top center;
    	padding: 12px 0;
	  }
	  .white-sheet{
		  background-size: 100%;
		  background-position: top center;

	  }
	  .rounded-b-lg{
		  border-radius: 0 0 8px 8px;		
	  }
	  .coin-loader{
		background: linear-gradient(106.64deg, #979797 0%, #BCBCBC 34.26%, #E0E0E0 70.31%, #848484 102.49%);
		box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.16);
	  }
	  .great-para{
		animation-name: mymove;
		animation-duration: 5s;
		transition:all 5s linear;
	  }
	  @keyframes mymove {
		0% { opacity: 0 }

          5% { opacity: 0; transform: rotateX(180deg); }
          100% { opacity: 1 }
}

	  .coin-summary{
		animation-name: mymove2;
		animation-duration: 3.5s;
		transition:all 3.5s linear;
	  }
	  @keyframes mymove2 {
		0% {
        
		display: block;
        opacity: 0;
		transform: translateY(0%);
    }

    5% {
        display: block;
        opacity: 1;
		transform: translateY(-50%);
    }

    100% {
        display: none;
        opacity: 1;
		transform: translateY(-100%);
    }
		}
		.pb-60{
			padding-bottom: 15rem;
		}
		.coin-summary{
			transform: translateY(-100%);
			width: 91.5%;
			opacity: 1;
		}
  </style>