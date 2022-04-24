<template>
    <div class="calendar-card">
        <vs-col type="flex" vs-justify="center" vs-align="center">
            <vs-card v-if="recordPerDayData" fixed-height>
                <div slot="header">
                    <h3>
                        {{recordPerDayData.dayString}}
                    </h3>
                </div>
                <div class="record-canvas">
                    <h1 class="record-value">
                        {{recordPerDayData.recordAmount}}
                    </h1>
                    Records
                </div>
            </vs-card>
            <vs-card v-else />
        </vs-col>
    </div>
</template>

<script>
export default {
    props: {
        recordPerDayData: {
            type: Object,
            required: true,
        }
    },
};
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