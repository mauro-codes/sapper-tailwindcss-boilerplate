<script>
  export let title = "";
  export let mockupImgUrl = "";
  export let mockupImgAlt = "";
  export let actionButtonUrl = "";
  export let actionButtonImgUrl = "";
  export let actionButtonAlt = "";
</script>

<div
  class="h-full flex flex-col justify-center md:flex-row-reverse items-center
  container mx-auto">
  <div
    class="w-full lg:w-1/2 h-1/2 md:h-3/4 flex justify-center md:justify-end
    mb-8 md:mb-0">
    <img src={mockupImgUrl} class="h-full" alt={mockupImgAlt} />
  </div>
  <div class="w-full lg:w-1/2 flex flex-col items-center md:items-start">
    <div class="hidden md:block bg-cool-blue p-6 mb-4 rounded-full">
      <img src="icon.png" alt="do i need it logo" class="h-24" />
    </div>
    <h1 class="text-3xl lg:text-5xl quicksand mb-4 text-center md:text-left">
      {title}
    </h1>
    <a href={actionButtonUrl} target="_blank" rel="noopener">
      <img src={actionButtonImgUrl} class="w-48" alt={actionButtonAlt} />
    </a>
  </div>
</div>
