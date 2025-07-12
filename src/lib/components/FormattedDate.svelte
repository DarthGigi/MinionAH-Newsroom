<script lang="ts">
  let { date }: { date: Date | string } = $props();

  // If date is a string, convert it to a Date object
  if (typeof date === "string") {
    date = new Date(date);
  } else if (!(date instanceof Date)) {
    throw new Error("Invalid date type. Expected Date or string.");
  }
</script>

<time datetime={date.toISOString()} class="text-xs md:text-sm">
  {date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</time>
