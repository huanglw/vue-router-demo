<template>
	<select v-model='selected'  @change="setValue">
		<option value='aaa'>AAA</option>
		<option :value='op'>{{op}}</option>
	</select>
</template>

<script>
	export default {
		name: 'aSelect',
		props: ['op'],
		methods: {
			setValue: function(){
				this.$emit('selectedValue',this.selected)
			}
		}
	}
</script>