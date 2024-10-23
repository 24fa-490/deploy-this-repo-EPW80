<script>
	export let container;
</script>

<div class="row">
	<span class="id">{container.containerNumber}</span>
	<span class="shipname">{container.nameOfShip}</span>
	<span class="date">{container.dateContainerShipped}</span>
	<span class="size">{container.containerSize}</span>
</div>

<style>
	.row {
		display: flex;
		background-color: #eee;
		padding: 5px;
		border-radius: 4px;
		margin-bottom: 10px;
	}

	.id,
	.shipname,
	.size,
	.date {
		margin: 5px;
	}

	.id {
		font-weight: bold;
		flex: 1;
	}

	.size {
		text-align: right;
		flex: 0 0 50px;
	}

	.date {
		flex: 0 0 100px;
		text-align: center;
	}

	.shipname {
		flex: 1;
		color: #999;
	}
</style>
