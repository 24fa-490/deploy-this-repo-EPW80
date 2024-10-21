<script>
	export let data;
	console.log({data});
</script>

<h1>Fetched from Database</h1>

{#each data.containers as container}
	<div>
		<span class="id">{container.containernumber}</span>
		<span class="name">{container.nameofship}</span>
		<span class="size">{container.containersize}</span>
		<span class="date">{container.datecontainershipped}</span>
	</div>
{/each}

<div class="i">(database lives in PostgreSQL)</div>

<style>
	.id {
		margin-right: 10px;
		font-weight: bold;
	}
	.name {
		color: #999;
		margin-right: 10px;
	}
	.size {
		margin-right: 10px;
	}
	.i {
		font-style: italic;
	}
</style>
