<template>
    <div class="calendar-card">
        <vs-col type="flex" vs-justify="center" vs-align="center">
            <vs-card fixed-height>
                <div slot="header">
                    <h3>
                        1 Sun
                    </h3>
                </div>
                <div class="record-canvas">
                    <h1 class="record-value">
                        420
                    </h1>
                    Records
                </div>
            </vs-card>
        </vs-col>
    </div>
</template>

<script>

</script>

<style scoped>
.calendar-card {
    width: 100%;
}

.calendar-card .record-value {
    font-size: 2.5rem;
}

.record-canvas {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>