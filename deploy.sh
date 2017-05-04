#!/bin/sh

aws s3 sync --exclude '.git/*' . s3://www.djed.is
