<template>
	<div>
	<h2>Hello {{ name }}, here is HOME page.</h2>

	<Selecttt :op="opt" @selectedValue="getValue"></Selecttt>
	<h3><b>The selected value is:</b><em>{{ selectedValue }}</em></h3>
	</div>
</template>

<script>
	import Selecttt from '@/components/aSelectComponent'

	export default {
		name: 'home',
		components: {Selecttt},
		data(){
			return {
				name: "Lewin<huanglewin@gmail.com>",
				opt: "firstOption",
				selectedValue: ''
			}
		},
		methods: {
			getValue(msg){
				this.selectedValue = msg;
			}
		}
	}
</script>